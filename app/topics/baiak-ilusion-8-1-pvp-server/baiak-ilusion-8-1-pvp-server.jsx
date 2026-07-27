import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-8-1-pvp-server');
}

export default function BaiakIlusion81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-8-1-pvp-server" />;
}
