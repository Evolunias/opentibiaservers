import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-harmonia-ot-ots');
}

export default function BestHarmoniaOtOtsKeywordPage() {
  return <StaticKeywordPage slug="best-harmonia-ot-ots" />;
}
