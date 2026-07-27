import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-baiak-server-poland');
}

export default function TibiameBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiame-baiak-server-poland" />;
}
