import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-midhem-login');
}

export default function TopMidhemLoginKeywordPage() {
  return <StaticKeywordPage slug="top-midhem-login" />;
}
