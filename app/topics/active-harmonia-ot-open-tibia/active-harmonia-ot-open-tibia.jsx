import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-harmonia-ot-open-tibia');
}

export default function ActiveHarmoniaOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-harmonia-ot-open-tibia" />;
}
