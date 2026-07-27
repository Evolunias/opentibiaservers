import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-latin-america-servers');
}

export default function OxygenotLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-latin-america-servers" />;
}
