import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-14-non-pvp-server');
}

export default function Venoreot14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-14-non-pvp-server" />;
}
