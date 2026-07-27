import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rookgaard-tales-discord');
}

export default function PopularRookgaardTalesDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-rookgaard-tales-discord" />;
}
