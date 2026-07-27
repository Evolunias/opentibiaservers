import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-madnessalive-open-tibia');
}

export default function OfficialMadnessaliveOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-madnessalive-open-tibia" />;
}
