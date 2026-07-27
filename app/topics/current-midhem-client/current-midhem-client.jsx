import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-midhem-client');
}

export default function CurrentMidhemClientKeywordPage() {
  return <StaticKeywordPage slug="current-midhem-client" />;
}
