import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-calmera-ot-open-tibia');
}

export default function CurrentCalmeraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-calmera-ot-open-tibia" />;
}
