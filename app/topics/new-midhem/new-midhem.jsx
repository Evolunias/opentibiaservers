import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-midhem');
}

export default function NewMidhemKeywordPage() {
  return <StaticKeywordPage slug="new-midhem" />;
}
