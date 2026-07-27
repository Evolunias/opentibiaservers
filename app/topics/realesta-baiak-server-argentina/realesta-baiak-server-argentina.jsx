import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-baiak-server-argentina');
}

export default function RealestaBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realesta-baiak-server-argentina" />;
}
