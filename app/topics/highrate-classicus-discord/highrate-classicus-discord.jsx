import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classicus-discord');
}

export default function HighrateClassicusDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-classicus-discord" />;
}
