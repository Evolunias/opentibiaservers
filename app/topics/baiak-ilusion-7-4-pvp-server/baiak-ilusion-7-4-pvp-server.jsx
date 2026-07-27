import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-7-4-pvp-server');
}

export default function BaiakIlusion74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-7-4-pvp-server" />;
}
