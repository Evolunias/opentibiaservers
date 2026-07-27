import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-madnessalive-open-tibia');
}

export default function FreshStartMadnessaliveOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-madnessalive-open-tibia" />;
}
