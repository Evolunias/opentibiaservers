import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-10-0-pvp-server');
}

export default function Cyntara100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-10-0-pvp-server" />;
}
