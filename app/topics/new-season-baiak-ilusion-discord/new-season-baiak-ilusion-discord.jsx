import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-baiak-ilusion-discord');
}

export default function NewSeasonBaiakIlusionDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-baiak-ilusion-discord" />;
}
