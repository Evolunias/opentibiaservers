import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rookgaard-tales-discord');
}

export default function HighrateRookgaardTalesDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-rookgaard-tales-discord" />;
}
