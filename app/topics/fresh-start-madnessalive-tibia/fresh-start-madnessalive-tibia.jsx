import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-madnessalive-tibia');
}

export default function FreshStartMadnessaliveTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-madnessalive-tibia" />;
}
