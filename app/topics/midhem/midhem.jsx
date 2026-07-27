import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem');
}

export default function MidhemKeywordPage() {
  return <StaticKeywordPage slug="midhem" />;
}
