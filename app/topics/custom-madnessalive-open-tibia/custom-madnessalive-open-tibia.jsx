import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-madnessalive-open-tibia');
}

export default function CustomMadnessaliveOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-madnessalive-open-tibia" />;
}
