import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-medivia-ots');
}

export default function BestMediviaOtsKeywordPage() {
  return <StaticKeywordPage slug="best-medivia-ots" />;
}
