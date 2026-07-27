import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-season-poland');
}

export default function BaiakSeasonPolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-season-poland" />;
}
