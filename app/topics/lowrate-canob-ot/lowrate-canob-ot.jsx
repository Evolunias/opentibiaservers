import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-canob-ot');
}

export default function LowrateCanobOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-canob-ot" />;
}
