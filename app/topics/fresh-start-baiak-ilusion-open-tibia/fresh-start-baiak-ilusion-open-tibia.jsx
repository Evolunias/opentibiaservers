import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-baiak-ilusion-open-tibia');
}

export default function FreshStartBaiakIlusionOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-baiak-ilusion-open-tibia" />;
}
