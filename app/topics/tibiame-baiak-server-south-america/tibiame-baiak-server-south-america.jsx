import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-baiak-server-south-america');
}

export default function TibiameBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-baiak-server-south-america" />;
}
