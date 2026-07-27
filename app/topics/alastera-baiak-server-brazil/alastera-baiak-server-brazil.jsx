import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-baiak-server-brazil');
}

export default function AlasteraBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="alastera-baiak-server-brazil" />;
}
