import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-15-non-pvp-server');
}

export default function Coxaot15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-15-non-pvp-server" />;
}
