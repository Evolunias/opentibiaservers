import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-baiak-ilusion-discord');
}

export default function OldSchoolBaiakIlusionDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-baiak-ilusion-discord" />;
}
