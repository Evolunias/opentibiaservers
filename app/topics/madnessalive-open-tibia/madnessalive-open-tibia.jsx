import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-open-tibia');
}

export default function MadnessaliveOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-open-tibia" />;
}
