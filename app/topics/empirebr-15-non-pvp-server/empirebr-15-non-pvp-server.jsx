import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-15-non-pvp-server');
}

export default function Empirebr15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-15-non-pvp-server" />;
}
