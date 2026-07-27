import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-canob-ots');
}

export default function FreshStartCanobOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-canob-ots" />;
}
