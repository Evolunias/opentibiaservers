import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-canob');
}

export default function NewCanobKeywordPage() {
  return <StaticKeywordPage slug="new-canob" />;
}
