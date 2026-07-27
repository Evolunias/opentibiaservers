import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-baiak-server-brazil');
}

export default function NtoStarBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nto-star-baiak-server-brazil" />;
}
