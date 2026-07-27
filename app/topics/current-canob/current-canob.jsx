import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-canob');
}

export default function CurrentCanobKeywordPage() {
  return <StaticKeywordPage slug="current-canob" />;
}
