import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-france-server');
}

export default function BaiakIlusionFranceServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-france-server" />;
}
