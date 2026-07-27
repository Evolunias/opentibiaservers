import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-cyntara-discord');
}

export default function HighrateCyntaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-cyntara-discord" />;
}
