import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-non-pvp-server-usa');
}

export default function CoxaotNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-non-pvp-server-usa" />;
}
