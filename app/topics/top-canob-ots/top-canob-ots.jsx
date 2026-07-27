import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-canob-ots');
}

export default function TopCanobOtsKeywordPage() {
  return <StaticKeywordPage slug="top-canob-ots" />;
}
