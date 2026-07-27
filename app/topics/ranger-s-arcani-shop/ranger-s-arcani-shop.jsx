import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-shop');
}

export default function RangerSArcaniShopKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-shop" />;
}
