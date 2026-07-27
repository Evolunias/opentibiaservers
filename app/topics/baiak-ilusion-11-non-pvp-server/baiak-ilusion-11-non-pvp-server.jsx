import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-11-non-pvp-server');
}

export default function BaiakIlusion11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-11-non-pvp-server" />;
}
