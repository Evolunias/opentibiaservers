import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-canob-ots');
}

export default function LowrateCanobOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-canob-ots" />;
}
