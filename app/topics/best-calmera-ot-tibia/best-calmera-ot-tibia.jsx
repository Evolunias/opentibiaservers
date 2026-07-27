import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-calmera-ot-tibia');
}

export default function BestCalmeraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-calmera-ot-tibia" />;
}
