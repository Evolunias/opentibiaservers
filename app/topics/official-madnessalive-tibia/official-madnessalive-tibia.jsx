import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-madnessalive-tibia');
}

export default function OfficialMadnessaliveTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-madnessalive-tibia" />;
}
