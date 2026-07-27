import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-canob-ots');
}

export default function NewCanobOtsKeywordPage() {
  return <StaticKeywordPage slug="new-canob-ots" />;
}
