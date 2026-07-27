import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-8-6-pvp-server');
}

export default function BaiakIlusion86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-8-6-pvp-server" />;
}
