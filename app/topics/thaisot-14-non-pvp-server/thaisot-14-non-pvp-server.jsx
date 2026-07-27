import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-14-non-pvp-server');
}

export default function Thaisot14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-14-non-pvp-server" />;
}
