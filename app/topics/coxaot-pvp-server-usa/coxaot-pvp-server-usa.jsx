import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvp-server-usa');
}

export default function CoxaotPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvp-server-usa" />;
}
