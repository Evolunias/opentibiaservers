import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rookgaard-tales-online');
}

export default function HighrateRookgaardTalesOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-rookgaard-tales-online" />;
}
