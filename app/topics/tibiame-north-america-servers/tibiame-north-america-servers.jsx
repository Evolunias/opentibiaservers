import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-north-america-servers');
}

export default function TibiameNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-north-america-servers" />;
}
