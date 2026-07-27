import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rookgaard-tales-discord');
}

export default function BestRookgaardTalesDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-rookgaard-tales-discord" />;
}
