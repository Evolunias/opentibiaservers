import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-latin-america-server');
}

export default function AlasteraLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-latin-america-server" />;
}
