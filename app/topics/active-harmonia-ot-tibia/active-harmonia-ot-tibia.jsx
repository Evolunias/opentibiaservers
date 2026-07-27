import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-harmonia-ot-tibia');
}

export default function ActiveHarmoniaOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-harmonia-ot-tibia" />;
}
