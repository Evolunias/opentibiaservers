import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-midhem-server');
}

export default function CurrentMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="current-midhem-server" />;
}
