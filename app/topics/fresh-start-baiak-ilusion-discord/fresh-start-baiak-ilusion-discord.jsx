import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-baiak-ilusion-discord');
}

export default function FreshStartBaiakIlusionDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-baiak-ilusion-discord" />;
}
