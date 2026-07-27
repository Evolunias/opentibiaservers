import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-alastera-discord');
}

export default function HighrateAlasteraDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-alastera-discord" />;
}
