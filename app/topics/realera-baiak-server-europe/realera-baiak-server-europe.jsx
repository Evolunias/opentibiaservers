import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-baiak-server-europe');
}

export default function RealeraBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="realera-baiak-server-europe" />;
}
