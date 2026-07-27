import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-canob');
}

export default function FreshStartCanobKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-canob" />;
}
