import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rookgaard-tales-discord');
}

export default function NewSeasonRookgaardTalesDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-rookgaard-tales-discord" />;
}
