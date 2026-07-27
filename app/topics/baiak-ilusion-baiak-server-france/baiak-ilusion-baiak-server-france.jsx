import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-baiak-server-france');
}

export default function BaiakIlusionBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-baiak-server-france" />;
}
