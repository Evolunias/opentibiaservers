import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-baiak-ilusion-discord');
}

export default function CurrentBaiakIlusionDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-baiak-ilusion-discord" />;
}
