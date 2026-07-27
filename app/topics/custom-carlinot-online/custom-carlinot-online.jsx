import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-carlinot-online');
}

export default function CustomCarlinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-carlinot-online" />;
}
