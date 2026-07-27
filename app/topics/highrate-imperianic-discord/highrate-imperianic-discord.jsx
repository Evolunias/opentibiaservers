import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-imperianic-discord');
}

export default function HighrateImperianicDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-imperianic-discord" />;
}
