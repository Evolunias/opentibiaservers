import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-harmonia-ot-open-tibia');
}

export default function NewHarmoniaOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-harmonia-ot-open-tibia" />;
}
