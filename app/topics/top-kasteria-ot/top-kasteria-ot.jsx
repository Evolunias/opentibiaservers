import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-kasteria-ot');
}

export default function TopKasteriaOtKeywordPage() {
  return <StaticKeywordPage slug="top-kasteria-ot" />;
}
