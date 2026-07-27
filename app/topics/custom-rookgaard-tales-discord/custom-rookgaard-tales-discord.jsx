import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rookgaard-tales-discord');
}

export default function CustomRookgaardTalesDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-rookgaard-tales-discord" />;
}
