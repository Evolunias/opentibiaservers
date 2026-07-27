import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-calmera-ot-tibia');
}

export default function FreshStartCalmeraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-calmera-ot-tibia" />;
}
