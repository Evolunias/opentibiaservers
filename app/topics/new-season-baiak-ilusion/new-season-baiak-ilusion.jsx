import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-baiak-ilusion');
}

export default function NewSeasonBaiakIlusionKeywordPage() {
  return <StaticKeywordPage slug="new-season-baiak-ilusion" />;
}
