import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-baiak-server-europe');
}

export default function KasteriaBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="kasteria-baiak-server-europe" />;
}
