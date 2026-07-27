import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-canob-ot');
}

export default function CustomCanobOtKeywordPage() {
  return <StaticKeywordPage slug="custom-canob-ot" />;
}
