import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oxygenot-online');
}

export default function CustomOxygenotOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-oxygenot-online" />;
}
