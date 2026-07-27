import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-login');
}

export default function MidhemLoginKeywordPage() {
  return <StaticKeywordPage slug="midhem-login" />;
}
