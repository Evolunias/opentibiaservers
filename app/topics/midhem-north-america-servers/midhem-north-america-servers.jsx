import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-north-america-servers');
}

export default function MidhemNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-north-america-servers" />;
}
