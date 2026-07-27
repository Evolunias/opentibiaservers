import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-latin-america-servers');
}

export default function TibiameLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-latin-america-servers" />;
}
