import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-baiak-server-usa');
}

export default function KasteriaBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-baiak-server-usa" />;
}
