import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-baiak-server-brazil');
}

export default function RealestaBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realesta-baiak-server-brazil" />;
}
