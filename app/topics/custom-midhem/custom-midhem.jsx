import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-midhem');
}

export default function CustomMidhemKeywordPage() {
  return <StaticKeywordPage slug="custom-midhem" />;
}
