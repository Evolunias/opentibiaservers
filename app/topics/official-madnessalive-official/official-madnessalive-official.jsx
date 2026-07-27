import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-madnessalive-official');
}

export default function OfficialMadnessaliveOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-madnessalive-official" />;
}
