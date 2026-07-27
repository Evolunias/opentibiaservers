import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-baiak-ilusion-client');
}

export default function NewSeasonBaiakIlusionClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-baiak-ilusion-client" />;
}
