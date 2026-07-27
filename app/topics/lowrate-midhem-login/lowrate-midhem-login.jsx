import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-midhem-login');
}

export default function LowrateMidhemLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-midhem-login" />;
}
