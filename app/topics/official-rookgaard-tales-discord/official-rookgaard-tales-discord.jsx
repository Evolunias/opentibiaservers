import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rookgaard-tales-discord');
}

export default function OfficialRookgaardTalesDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-rookgaard-tales-discord" />;
}
