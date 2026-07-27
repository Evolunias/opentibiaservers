import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-14-non-pvp-server');
}

export default function BaiakIlusion14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-14-non-pvp-server" />;
}
