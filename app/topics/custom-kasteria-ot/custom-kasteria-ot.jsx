import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-kasteria-ot');
}

export default function CustomKasteriaOtKeywordPage() {
  return <StaticKeywordPage slug="custom-kasteria-ot" />;
}
