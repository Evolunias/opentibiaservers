import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-calmera-ot-open-tibia');
}

export default function BestCalmeraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-calmera-ot-open-tibia" />;
}
