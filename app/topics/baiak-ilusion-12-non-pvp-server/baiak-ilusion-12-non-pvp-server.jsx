import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-12-non-pvp-server');
}

export default function BaiakIlusion12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-12-non-pvp-server" />;
}
