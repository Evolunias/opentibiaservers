import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-unline-online');
}

export default function HighrateUnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-unline-online" />;
}
