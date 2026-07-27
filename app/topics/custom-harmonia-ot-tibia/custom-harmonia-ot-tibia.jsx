import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-harmonia-ot-tibia');
}

export default function CustomHarmoniaOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-harmonia-ot-tibia" />;
}
