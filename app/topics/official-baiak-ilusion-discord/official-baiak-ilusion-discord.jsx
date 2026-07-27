import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-baiak-ilusion-discord');
}

export default function OfficialBaiakIlusionDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-baiak-ilusion-discord" />;
}
