import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-tibia');
}

export default function MadnessaliveTibiaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-tibia" />;
}
