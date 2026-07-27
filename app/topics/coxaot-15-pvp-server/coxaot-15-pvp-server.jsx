import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-15-pvp-server');
}

export default function Coxaot15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-15-pvp-server" />;
}
