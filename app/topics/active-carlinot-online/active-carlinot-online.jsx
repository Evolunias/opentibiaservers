import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-carlinot-online');
}

export default function ActiveCarlinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-carlinot-online" />;
}
