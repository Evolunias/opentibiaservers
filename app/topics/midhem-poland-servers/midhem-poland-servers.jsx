import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-poland-servers');
}

export default function MidhemPolandServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-poland-servers" />;
}
