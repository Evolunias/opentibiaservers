import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-medivia-online');
}

export default function TopMediviaOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-medivia-online" />;
}
