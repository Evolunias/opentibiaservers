import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-midhem-login');
}

export default function CustomMidhemLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-midhem-login" />;
}
