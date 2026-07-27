import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-baiak-server-uk');
}

export default function AlasteraBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="alastera-baiak-server-uk" />;
}
