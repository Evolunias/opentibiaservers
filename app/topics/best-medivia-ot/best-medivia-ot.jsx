import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-medivia-ot');
}

export default function BestMediviaOtKeywordPage() {
  return <StaticKeywordPage slug="best-medivia-ot" />;
}
