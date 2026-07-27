import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-custom-map-servers-poland');
}

export default function BaiakIlusionCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-custom-map-servers-poland" />;
}
