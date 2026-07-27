import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-baiak-server-mexico');
}

export default function RealestaBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realesta-baiak-server-mexico" />;
}
