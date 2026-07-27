import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-baiak-ilusion-discord');
}

export default function CustomBaiakIlusionDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-baiak-ilusion-discord" />;
}
