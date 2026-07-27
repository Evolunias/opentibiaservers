import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-latin-america-server');
}

export default function CanobLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="canob-latin-america-server" />;
}
