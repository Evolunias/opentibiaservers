import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-12-non-pvp-server');
}

export default function Empirebr12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-12-non-pvp-server" />;
}
