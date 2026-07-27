import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-12-pvp-server');
}

export default function Cyntara12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-12-pvp-server" />;
}
