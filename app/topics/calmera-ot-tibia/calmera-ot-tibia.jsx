import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-tibia');
}

export default function CalmeraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-tibia" />;
}
