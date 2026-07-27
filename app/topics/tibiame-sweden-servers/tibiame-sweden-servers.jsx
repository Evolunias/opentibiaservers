import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-sweden-servers');
}

export default function TibiameSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-sweden-servers" />;
}
