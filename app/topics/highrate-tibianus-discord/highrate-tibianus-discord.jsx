import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibianus-discord');
}

export default function HighrateTibianusDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibianus-discord" />;
}
