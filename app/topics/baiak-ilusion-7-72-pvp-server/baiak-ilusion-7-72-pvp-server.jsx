import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-7-72-pvp-server');
}

export default function BaiakIlusion772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-7-72-pvp-server" />;
}
