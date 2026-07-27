import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-harmonia-ot-tibia');
}

export default function NewHarmoniaOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-harmonia-ot-tibia" />;
}
