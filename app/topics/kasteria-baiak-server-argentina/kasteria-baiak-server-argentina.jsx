import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-baiak-server-argentina');
}

export default function KasteriaBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-baiak-server-argentina" />;
}
