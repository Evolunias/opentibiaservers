import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-tibia');
}

export default function HarmoniaOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-tibia" />;
}
