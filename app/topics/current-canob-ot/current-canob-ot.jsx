import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-canob-ot');
}

export default function CurrentCanobOtKeywordPage() {
  return <StaticKeywordPage slug="current-canob-ot" />;
}
