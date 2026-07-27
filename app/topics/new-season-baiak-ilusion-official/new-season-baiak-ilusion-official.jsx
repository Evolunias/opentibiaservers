import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-baiak-ilusion-official');
}

export default function NewSeasonBaiakIlusionOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-baiak-ilusion-official" />;
}
