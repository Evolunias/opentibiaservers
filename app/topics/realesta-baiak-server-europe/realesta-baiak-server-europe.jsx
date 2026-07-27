import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-baiak-server-europe');
}

export default function RealestaBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="realesta-baiak-server-europe" />;
}
