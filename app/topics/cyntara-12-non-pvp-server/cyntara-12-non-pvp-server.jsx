import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-12-non-pvp-server');
}

export default function Cyntara12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-12-non-pvp-server" />;
}
