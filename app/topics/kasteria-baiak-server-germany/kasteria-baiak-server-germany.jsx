import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-baiak-server-germany');
}

export default function KasteriaBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="kasteria-baiak-server-germany" />;
}
