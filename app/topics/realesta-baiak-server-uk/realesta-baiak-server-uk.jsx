import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-baiak-server-uk');
}

export default function RealestaBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="realesta-baiak-server-uk" />;
}
