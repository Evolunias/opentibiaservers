import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-poland-servers');
}

export default function ThaisotPolandServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-poland-servers" />;
}
