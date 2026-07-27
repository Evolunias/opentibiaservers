import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-calmera-ot-tibia');
}

export default function CurrentCalmeraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-calmera-ot-tibia" />;
}
