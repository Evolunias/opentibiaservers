import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-7-4-non-pvp-server');
}

export default function BaiakIlusion74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-7-4-non-pvp-server" />;
}
