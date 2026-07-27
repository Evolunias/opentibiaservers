import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-calmera-ot-open-tibia');
}

export default function ActiveCalmeraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-calmera-ot-open-tibia" />;
}
