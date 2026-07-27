import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-baiak-server-argentina');
}

export default function AlasteraBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="alastera-baiak-server-argentina" />;
}
