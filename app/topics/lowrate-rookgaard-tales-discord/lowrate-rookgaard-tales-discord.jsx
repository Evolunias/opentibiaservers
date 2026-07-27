import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rookgaard-tales-discord');
}

export default function LowrateRookgaardTalesDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rookgaard-tales-discord" />;
}
