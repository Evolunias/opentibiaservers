import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-baiak-ilusion-tibia');
}

export default function FreshStartBaiakIlusionTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-baiak-ilusion-tibia" />;
}
