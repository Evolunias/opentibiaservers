import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-baiak-ilusion-discord');
}

export default function HighrateBaiakIlusionDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-baiak-ilusion-discord" />;
}
