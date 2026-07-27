import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-north-america-server');
}

export default function MidhemNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-north-america-server" />;
}
