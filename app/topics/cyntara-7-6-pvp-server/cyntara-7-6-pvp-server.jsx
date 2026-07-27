import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-6-pvp-server');
}

export default function Cyntara76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-6-pvp-server" />;
}
