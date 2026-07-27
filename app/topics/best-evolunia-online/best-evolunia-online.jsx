import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolunia-online');
}

export default function BestEvoluniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-evolunia-online" />;
}
