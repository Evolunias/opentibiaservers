import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-baiak-server-usa');
}

export default function AlasteraBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="alastera-baiak-server-usa" />;
}
