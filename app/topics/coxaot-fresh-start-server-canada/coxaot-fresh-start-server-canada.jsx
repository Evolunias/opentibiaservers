import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-fresh-start-server-canada');
}

export default function CoxaotFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-fresh-start-server-canada" />;
}
