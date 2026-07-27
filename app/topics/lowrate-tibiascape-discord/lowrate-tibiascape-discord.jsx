import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiascape-discord');
}

export default function LowrateTibiascapeDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiascape-discord" />;
}
