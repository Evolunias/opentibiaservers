import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-baiak-ilusion-open-tibia');
}

export default function LowrateBaiakIlusionOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-baiak-ilusion-open-tibia" />;
}
