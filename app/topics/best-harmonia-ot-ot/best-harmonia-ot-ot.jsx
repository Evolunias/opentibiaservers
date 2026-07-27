import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-harmonia-ot-ot');
}

export default function BestHarmoniaOtOtKeywordPage() {
  return <StaticKeywordPage slug="best-harmonia-ot-ot" />;
}
