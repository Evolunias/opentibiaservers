import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiantis-ot');
}

export default function BestTibiantisOtKeywordPage() {
  return <StaticKeywordPage slug="best-tibiantis-ot" />;
}
