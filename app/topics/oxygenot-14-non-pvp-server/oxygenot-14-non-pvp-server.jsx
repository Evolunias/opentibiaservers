import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-14-non-pvp-server');
}

export default function Oxygenot14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-14-non-pvp-server" />;
}
