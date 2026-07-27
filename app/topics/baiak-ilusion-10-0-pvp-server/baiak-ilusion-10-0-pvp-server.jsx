import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-10-0-pvp-server');
}

export default function BaiakIlusion100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-10-0-pvp-server" />;
}
