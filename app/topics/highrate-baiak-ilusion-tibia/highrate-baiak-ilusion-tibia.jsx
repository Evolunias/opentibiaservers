import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-baiak-ilusion-tibia');
}

export default function HighrateBaiakIlusionTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-baiak-ilusion-tibia" />;
}
