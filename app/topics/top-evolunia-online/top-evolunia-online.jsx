import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolunia-online');
}

export default function TopEvoluniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-evolunia-online" />;
}
