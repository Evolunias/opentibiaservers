import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-baiak-server-poland');
}

export default function KasteriaBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="kasteria-baiak-server-poland" />;
}
