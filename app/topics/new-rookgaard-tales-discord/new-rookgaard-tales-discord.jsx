import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rookgaard-tales-discord');
}

export default function NewRookgaardTalesDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-rookgaard-tales-discord" />;
}
