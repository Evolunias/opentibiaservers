import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-madnessalive-tibia');
}

export default function TopMadnessaliveTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-madnessalive-tibia" />;
}
