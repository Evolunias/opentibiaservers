import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-medivia-discord');
}

export default function HighrateMediviaDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-medivia-discord" />;
}
