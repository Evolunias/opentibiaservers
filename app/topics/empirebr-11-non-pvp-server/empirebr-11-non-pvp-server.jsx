import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-11-non-pvp-server');
}

export default function Empirebr11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-11-non-pvp-server" />;
}
