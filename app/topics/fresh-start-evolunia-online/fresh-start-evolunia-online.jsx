import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolunia-online');
}

export default function FreshStartEvoluniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolunia-online" />;
}
