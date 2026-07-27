import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-baiak-server-germany');
}

export default function RealestaBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="realesta-baiak-server-germany" />;
}
