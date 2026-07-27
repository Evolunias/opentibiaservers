import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-72-pvp-server');
}

export default function Cyntara772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-72-pvp-server" />;
}
