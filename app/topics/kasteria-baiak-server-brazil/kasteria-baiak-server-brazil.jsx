import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-baiak-server-brazil');
}

export default function KasteriaBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="kasteria-baiak-server-brazil" />;
}
