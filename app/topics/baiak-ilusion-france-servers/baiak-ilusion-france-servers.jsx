import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-france-servers');
}

export default function BaiakIlusionFranceServersKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-france-servers" />;
}
