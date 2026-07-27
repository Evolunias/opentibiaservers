import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-canob-ot');
}

export default function FreshStartCanobOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-canob-ot" />;
}
