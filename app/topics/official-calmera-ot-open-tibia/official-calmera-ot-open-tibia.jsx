import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-calmera-ot-open-tibia');
}

export default function OfficialCalmeraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-calmera-ot-open-tibia" />;
}
