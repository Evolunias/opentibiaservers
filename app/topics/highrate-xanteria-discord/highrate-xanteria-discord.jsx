import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-xanteria-discord');
}

export default function HighrateXanteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-xanteria-discord" />;
}
