import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiantis-discord');
}

export default function HighrateTibiantisDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiantis-discord" />;
}
