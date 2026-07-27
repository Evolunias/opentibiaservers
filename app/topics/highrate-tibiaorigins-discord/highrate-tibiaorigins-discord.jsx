import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaorigins-discord');
}

export default function HighrateTibiaoriginsDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaorigins-discord" />;
}
