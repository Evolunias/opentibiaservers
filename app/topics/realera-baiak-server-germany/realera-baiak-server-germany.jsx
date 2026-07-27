import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-baiak-server-germany');
}

export default function RealeraBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="realera-baiak-server-germany" />;
}
