import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-otmadness-open-tibia');
}

export default function ActiveOtmadnessOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-otmadness-open-tibia" />;
}
