import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolunia-online');
}

export default function PopularEvoluniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-evolunia-online" />;
}
