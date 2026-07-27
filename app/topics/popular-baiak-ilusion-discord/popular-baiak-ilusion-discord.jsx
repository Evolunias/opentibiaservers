import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-baiak-ilusion-discord');
}

export default function PopularBaiakIlusionDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-baiak-ilusion-discord" />;
}
