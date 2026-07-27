import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-baiak-ilusion-discord');
}

export default function ActiveBaiakIlusionDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-baiak-ilusion-discord" />;
}
