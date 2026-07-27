import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-baiak-ilusion-open-tibia');
}

export default function HighrateBaiakIlusionOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-baiak-ilusion-open-tibia" />;
}
