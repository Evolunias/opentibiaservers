import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-madnessalive-open-tibia');
}

export default function BestMadnessaliveOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-madnessalive-open-tibia" />;
}
