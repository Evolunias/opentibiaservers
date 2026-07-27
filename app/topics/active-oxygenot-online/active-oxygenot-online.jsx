import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oxygenot-online');
}

export default function ActiveOxygenotOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-oxygenot-online" />;
}
