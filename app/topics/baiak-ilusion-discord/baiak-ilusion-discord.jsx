import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-discord');
}

export default function BaiakIlusionDiscordKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-discord" />;
}
