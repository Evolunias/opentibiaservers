import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-7-1-pvp-server');
}

export default function BaiakIlusion71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-7-1-pvp-server" />;
}
