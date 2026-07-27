import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-12-non-pvp-server');
}

export default function Coxaot12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-12-non-pvp-server" />;
}
