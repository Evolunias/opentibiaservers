import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-otmadness-open-tibia');
}

export default function FreshStartOtmadnessOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-otmadness-open-tibia" />;
}
