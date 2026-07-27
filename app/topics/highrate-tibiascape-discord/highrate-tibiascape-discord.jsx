import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiascape-discord');
}

export default function HighrateTibiascapeDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiascape-discord" />;
}
