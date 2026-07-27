import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-9-6-pvp-server');
}

export default function Cyntara96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-9-6-pvp-server" />;
}
