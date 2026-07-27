import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvp-server-argentina');
}

export default function CoxaotPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvp-server-argentina" />;
}
