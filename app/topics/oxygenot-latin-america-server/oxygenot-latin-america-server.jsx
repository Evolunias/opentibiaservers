import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-latin-america-server');
}

export default function OxygenotLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-latin-america-server" />;
}
