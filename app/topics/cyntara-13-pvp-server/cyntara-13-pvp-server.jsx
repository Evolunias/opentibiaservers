import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-13-pvp-server');
}

export default function Cyntara13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-13-pvp-server" />;
}
