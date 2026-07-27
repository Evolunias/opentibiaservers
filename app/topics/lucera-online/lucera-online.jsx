import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lucera-online');
}

export default function LuceraOnlineKeywordPage() {
  return <StaticKeywordPage slug="lucera-online" />;
}
