import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-season');
}

export default function BaiakIlusionSeasonKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-season" />;
}
