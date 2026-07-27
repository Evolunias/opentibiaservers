import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-fresh-start-server-usa');
}

export default function CoxaotFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-fresh-start-server-usa" />;
}
