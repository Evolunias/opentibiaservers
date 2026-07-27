import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-baiak-ilusion-server');
}

export default function NewSeasonBaiakIlusionServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-baiak-ilusion-server" />;
}
