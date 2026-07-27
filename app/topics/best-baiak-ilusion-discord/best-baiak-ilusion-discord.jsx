import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-baiak-ilusion-discord');
}

export default function BestBaiakIlusionDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-baiak-ilusion-discord" />;
}
