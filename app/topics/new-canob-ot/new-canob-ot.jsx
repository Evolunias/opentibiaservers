import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-canob-ot');
}

export default function NewCanobOtKeywordPage() {
  return <StaticKeywordPage slug="new-canob-ot" />;
}
