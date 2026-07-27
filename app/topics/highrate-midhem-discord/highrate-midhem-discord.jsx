import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-midhem-discord');
}

export default function HighrateMidhemDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-midhem-discord" />;
}
