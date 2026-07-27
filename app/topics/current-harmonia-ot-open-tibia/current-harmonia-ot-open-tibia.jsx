import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-harmonia-ot-open-tibia');
}

export default function CurrentHarmoniaOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-harmonia-ot-open-tibia" />;
}
