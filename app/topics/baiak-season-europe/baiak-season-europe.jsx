import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-season-europe');
}

export default function BaiakSeasonEuropeKeywordPage() {
  return <StaticKeywordPage slug="baiak-season-europe" />;
}
