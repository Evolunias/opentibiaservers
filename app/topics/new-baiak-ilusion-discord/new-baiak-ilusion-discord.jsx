import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-baiak-ilusion-discord');
}

export default function NewBaiakIlusionDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-baiak-ilusion-discord" />;
}
