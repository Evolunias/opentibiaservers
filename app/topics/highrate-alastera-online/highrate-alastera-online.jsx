import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-alastera-online');
}

export default function HighrateAlasteraOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-alastera-online" />;
}
