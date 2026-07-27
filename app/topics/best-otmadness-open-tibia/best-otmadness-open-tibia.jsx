import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-otmadness-open-tibia');
}

export default function BestOtmadnessOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-otmadness-open-tibia" />;
}
