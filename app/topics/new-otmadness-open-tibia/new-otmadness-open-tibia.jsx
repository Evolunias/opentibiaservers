import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-otmadness-open-tibia');
}

export default function NewOtmadnessOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-otmadness-open-tibia" />;
}
