import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-baiak-ilusion-discord');
}

export default function LowrateBaiakIlusionDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-baiak-ilusion-discord" />;
}
