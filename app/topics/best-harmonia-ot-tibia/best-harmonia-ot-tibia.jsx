import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-harmonia-ot-tibia');
}

export default function BestHarmoniaOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-harmonia-ot-tibia" />;
}
