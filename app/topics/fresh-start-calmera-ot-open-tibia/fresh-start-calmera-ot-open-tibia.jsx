import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-calmera-ot-open-tibia');
}

export default function FreshStartCalmeraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-calmera-ot-open-tibia" />;
}
