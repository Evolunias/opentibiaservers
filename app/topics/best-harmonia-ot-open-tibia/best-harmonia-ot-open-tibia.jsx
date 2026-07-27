import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-harmonia-ot-open-tibia');
}

export default function BestHarmoniaOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-harmonia-ot-open-tibia" />;
}
