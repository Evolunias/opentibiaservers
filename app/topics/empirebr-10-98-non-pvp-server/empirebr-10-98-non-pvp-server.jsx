import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-10-98-non-pvp-server');
}

export default function Empirebr1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-10-98-non-pvp-server" />;
}
