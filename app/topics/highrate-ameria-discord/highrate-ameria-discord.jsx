import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ameria-discord');
}

export default function HighrateAmeriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-ameria-discord" />;
}
