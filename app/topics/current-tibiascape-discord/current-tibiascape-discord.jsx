import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiascape-discord');
}

export default function CurrentTibiascapeDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-tibiascape-discord" />;
}
