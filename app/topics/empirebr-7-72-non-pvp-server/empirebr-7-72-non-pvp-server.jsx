import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-72-non-pvp-server');
}

export default function Empirebr772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-72-non-pvp-server" />;
}
