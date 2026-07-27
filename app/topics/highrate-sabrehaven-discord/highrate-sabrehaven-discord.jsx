import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-sabrehaven-discord');
}

export default function HighrateSabrehavenDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-sabrehaven-discord" />;
}
