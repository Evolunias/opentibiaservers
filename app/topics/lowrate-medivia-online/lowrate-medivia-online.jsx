import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-medivia-online');
}

export default function LowrateMediviaOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-medivia-online" />;
}
