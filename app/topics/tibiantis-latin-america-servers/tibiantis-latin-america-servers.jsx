import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-latin-america-servers');
}

export default function TibiantisLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-latin-america-servers" />;
}
