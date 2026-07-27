import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-calmera-ot-open-tibia');
}

export default function TopCalmeraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-calmera-ot-open-tibia" />;
}
