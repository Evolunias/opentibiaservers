import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibianus-ot');
}

export default function BestTibianusOtKeywordPage() {
  return <StaticKeywordPage slug="best-tibianus-ot" />;
}
