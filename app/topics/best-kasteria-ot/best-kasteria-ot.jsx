import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-kasteria-ot');
}

export default function BestKasteriaOtKeywordPage() {
  return <StaticKeywordPage slug="best-kasteria-ot" />;
}
