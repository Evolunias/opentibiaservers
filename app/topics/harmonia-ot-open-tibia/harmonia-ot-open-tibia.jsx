import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-open-tibia');
}

export default function HarmoniaOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-open-tibia" />;
}
