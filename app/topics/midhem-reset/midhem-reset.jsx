import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-reset');
}

export default function MidhemResetKeywordPage() {
  return <StaticKeywordPage slug="midhem-reset" />;
}
