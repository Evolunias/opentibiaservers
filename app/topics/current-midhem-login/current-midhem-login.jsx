import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-midhem-login');
}

export default function CurrentMidhemLoginKeywordPage() {
  return <StaticKeywordPage slug="current-midhem-login" />;
}
