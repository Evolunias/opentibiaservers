import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-argentina-servers');
}

export default function ThaisotArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-argentina-servers" />;
}
