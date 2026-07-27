import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-4-non-pvp-server');
}

export default function Cyntara84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-4-non-pvp-server" />;
}
