import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-harmonia-ot-tibia');
}

export default function CurrentHarmoniaOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-harmonia-ot-tibia" />;
}
