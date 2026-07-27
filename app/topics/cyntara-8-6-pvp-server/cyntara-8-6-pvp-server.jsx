import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-6-pvp-server');
}

export default function Cyntara86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-6-pvp-server" />;
}
