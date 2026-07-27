import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-baiak-ilusion-discord');
}

export default function NoResetBaiakIlusionDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-baiak-ilusion-discord" />;
}
