import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-12-pvp-server');
}

export default function BaiakIlusion12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-12-pvp-server" />;
}
