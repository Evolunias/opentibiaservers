import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-0-pvp-server');
}

export default function Cyntara80PvpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-0-pvp-server" />;
}
