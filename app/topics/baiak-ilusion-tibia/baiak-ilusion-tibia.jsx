import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-tibia');
}

export default function BaiakIlusionTibiaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-tibia" />;
}
