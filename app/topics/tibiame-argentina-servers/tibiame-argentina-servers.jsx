import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-argentina-servers');
}

export default function TibiameArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-argentina-servers" />;
}
