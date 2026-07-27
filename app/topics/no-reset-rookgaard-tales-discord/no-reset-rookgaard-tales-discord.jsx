import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rookgaard-tales-discord');
}

export default function NoResetRookgaardTalesDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rookgaard-tales-discord" />;
}
