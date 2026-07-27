import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-baiak-ilusion-ots');
}

export default function NewSeasonBaiakIlusionOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-baiak-ilusion-ots" />;
}
