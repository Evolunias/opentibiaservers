import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-latin-america-servers');
}

export default function CanobLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="canob-latin-america-servers" />;
}
