import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-15-pvp-server');
}

export default function BaiakIlusion15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-15-pvp-server" />;
}
