import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-madnessalive-open-tibia');
}

export default function TopMadnessaliveOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-madnessalive-open-tibia" />;
}
