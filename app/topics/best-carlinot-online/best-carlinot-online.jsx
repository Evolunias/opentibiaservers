import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-carlinot-online');
}

export default function BestCarlinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-carlinot-online" />;
}
