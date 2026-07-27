import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-calmera-ot-tibia');
}

export default function OfficialCalmeraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-calmera-ot-tibia" />;
}
