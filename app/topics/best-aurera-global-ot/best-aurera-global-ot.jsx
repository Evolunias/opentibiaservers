import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-aurera-global-ot');
}

export default function BestAureraGlobalOtKeywordPage() {
  return <StaticKeywordPage slug="best-aurera-global-ot" />;
}
