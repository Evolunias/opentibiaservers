import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-6-non-pvp-server');
}

export default function Coxaot86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-6-non-pvp-server" />;
}
