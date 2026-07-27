import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-open-tibia');
}

export default function OtmadnessOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-open-tibia" />;
}
