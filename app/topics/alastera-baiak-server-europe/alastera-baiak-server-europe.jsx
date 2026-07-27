import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-baiak-server-europe');
}

export default function AlasteraBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="alastera-baiak-server-europe" />;
}
