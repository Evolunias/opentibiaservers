import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-baiak-server-europe');
}

export default function ClassicusBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classicus-baiak-server-europe" />;
}
