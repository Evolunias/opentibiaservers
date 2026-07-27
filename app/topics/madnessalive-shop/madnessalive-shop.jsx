import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-shop');
}

export default function MadnessaliveShopKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-shop" />;
}
