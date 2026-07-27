import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-luminera-discord');
}

export default function HighrateLumineraDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-luminera-discord" />;
}
