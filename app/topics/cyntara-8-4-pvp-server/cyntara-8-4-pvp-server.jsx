import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-4-pvp-server');
}

export default function Cyntara84PvpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-4-pvp-server" />;
}
