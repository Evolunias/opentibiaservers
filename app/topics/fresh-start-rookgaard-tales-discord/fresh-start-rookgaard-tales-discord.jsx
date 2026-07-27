import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rookgaard-tales-discord');
}

export default function FreshStartRookgaardTalesDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rookgaard-tales-discord" />;
}
