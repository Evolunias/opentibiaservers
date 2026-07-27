import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-baiak-server-south-america');
}

export default function NtoStarBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-baiak-server-south-america" />;
}
