import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-madnessalive-open-tibia');
}

export default function ActiveMadnessaliveOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-madnessalive-open-tibia" />;
}
