import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-baiak-server-poland');
}

export default function RealestaBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realesta-baiak-server-poland" />;
}
