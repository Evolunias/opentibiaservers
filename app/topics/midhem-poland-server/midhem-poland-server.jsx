import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-poland-server');
}

export default function MidhemPolandServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-poland-server" />;
}
