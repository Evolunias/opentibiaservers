import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-medivia-online');
}

export default function CurrentMediviaOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-medivia-online" />;
}
