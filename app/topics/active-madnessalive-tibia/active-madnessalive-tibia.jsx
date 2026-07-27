import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-madnessalive-tibia');
}

export default function ActiveMadnessaliveTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-madnessalive-tibia" />;
}
