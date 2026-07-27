import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-baiak-ilusion-tibia');
}

export default function LowrateBaiakIlusionTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-baiak-ilusion-tibia" />;
}
