import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-madnessalive');
}

export default function OfficialMadnessaliveKeywordPage() {
  return <StaticKeywordPage slug="official-madnessalive" />;
}
