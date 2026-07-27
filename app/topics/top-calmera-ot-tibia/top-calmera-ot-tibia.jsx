import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-calmera-ot-tibia');
}

export default function TopCalmeraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-calmera-ot-tibia" />;
}
