import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-4-non-pvp-server');
}

export default function Empirebr84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-4-non-pvp-server" />;
}
