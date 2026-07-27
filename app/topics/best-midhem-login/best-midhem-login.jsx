import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-midhem-login');
}

export default function BestMidhemLoginKeywordPage() {
  return <StaticKeywordPage slug="best-midhem-login" />;
}
