import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-harmonia-ot-open-tibia');
}

export default function CustomHarmoniaOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-harmonia-ot-open-tibia" />;
}
