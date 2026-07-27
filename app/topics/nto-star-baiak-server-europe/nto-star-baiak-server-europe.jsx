import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-baiak-server-europe');
}

export default function NtoStarBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nto-star-baiak-server-europe" />;
}
