import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-latin-america-server');
}

export default function TibiantisLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-latin-america-server" />;
}
