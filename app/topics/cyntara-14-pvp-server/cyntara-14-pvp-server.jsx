import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-14-pvp-server');
}

export default function Cyntara14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-14-pvp-server" />;
}
