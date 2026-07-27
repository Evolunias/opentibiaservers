import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-1-pvp-server');
}

export default function Cyntara81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-1-pvp-server" />;
}
