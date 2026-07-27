import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-non-pvp-server-argentina');
}

export default function CoxaotNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-non-pvp-server-argentina" />;
}
