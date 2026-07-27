import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-canob-ot');
}

export default function TopCanobOtKeywordPage() {
  return <StaticKeywordPage slug="top-canob-ot" />;
}
