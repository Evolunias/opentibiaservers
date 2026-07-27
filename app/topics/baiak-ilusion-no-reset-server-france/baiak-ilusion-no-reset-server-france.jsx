import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-no-reset-server-france');
}

export default function BaiakIlusionNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-no-reset-server-france" />;
}
