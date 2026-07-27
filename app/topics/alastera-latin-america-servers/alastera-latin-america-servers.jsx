import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-latin-america-servers');
}

export default function AlasteraLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-latin-america-servers" />;
}
