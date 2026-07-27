import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-15-pvp-server');
}

export default function Cyntara15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-15-pvp-server" />;
}
