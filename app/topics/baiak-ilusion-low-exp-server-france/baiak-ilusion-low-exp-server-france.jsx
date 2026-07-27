import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-low-exp-server-france');
}

export default function BaiakIlusionLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-low-exp-server-france" />;
}
