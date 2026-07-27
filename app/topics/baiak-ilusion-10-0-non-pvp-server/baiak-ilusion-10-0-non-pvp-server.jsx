import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-10-0-non-pvp-server');
}

export default function BaiakIlusion100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-10-0-non-pvp-server" />;
}
