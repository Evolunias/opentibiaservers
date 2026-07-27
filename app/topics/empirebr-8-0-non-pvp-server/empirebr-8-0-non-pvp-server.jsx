import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-0-non-pvp-server');
}

export default function Empirebr80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-0-non-pvp-server" />;
}
