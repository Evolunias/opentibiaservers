import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-miracle-ot');
}

export default function BestMiracleOtKeywordPage() {
  return <StaticKeywordPage slug="best-miracle-ot" />;
}
