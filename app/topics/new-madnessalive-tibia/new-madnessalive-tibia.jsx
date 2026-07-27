import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-madnessalive-tibia');
}

export default function NewMadnessaliveTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-madnessalive-tibia" />;
}
