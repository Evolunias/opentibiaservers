import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-carlinot-online');
}

export default function NewCarlinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-carlinot-online" />;
}
