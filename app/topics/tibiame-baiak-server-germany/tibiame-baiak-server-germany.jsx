import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-baiak-server-germany');
}

export default function TibiameBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiame-baiak-server-germany" />;
}
