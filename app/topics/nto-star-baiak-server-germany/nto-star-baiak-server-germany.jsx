import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-baiak-server-germany');
}

export default function NtoStarBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nto-star-baiak-server-germany" />;
}
