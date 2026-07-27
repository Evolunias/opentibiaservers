import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-harmonia-ot');
}

export default function BestHarmoniaOtKeywordPage() {
  return <StaticKeywordPage slug="best-harmonia-ot" />;
}
