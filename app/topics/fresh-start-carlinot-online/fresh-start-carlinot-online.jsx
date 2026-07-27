import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-carlinot-online');
}

export default function FreshStartCarlinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-carlinot-online" />;
}
