import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-miracle-online');
}

export default function BestMiracleOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-miracle-online" />;
}
