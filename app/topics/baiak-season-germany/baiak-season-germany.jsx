import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-season-germany');
}

export default function BaiakSeasonGermanyKeywordPage() {
  return <StaticKeywordPage slug="baiak-season-germany" />;
}
