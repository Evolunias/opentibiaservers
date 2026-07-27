import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-high-exp-server-france');
}

export default function BaiakIlusionHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-high-exp-server-france" />;
}
