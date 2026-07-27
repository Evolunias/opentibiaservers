import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvp');
}

export default function CoxaotPvpKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvp" />;
}
