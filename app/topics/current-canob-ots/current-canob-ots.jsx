import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-canob-ots');
}

export default function CurrentCanobOtsKeywordPage() {
  return <StaticKeywordPage slug="current-canob-ots" />;
}
