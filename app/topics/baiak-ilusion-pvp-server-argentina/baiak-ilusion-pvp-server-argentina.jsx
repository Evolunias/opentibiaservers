import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-pvp-server-argentina');
}

export default function BaiakIlusionPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-pvp-server-argentina" />;
}
