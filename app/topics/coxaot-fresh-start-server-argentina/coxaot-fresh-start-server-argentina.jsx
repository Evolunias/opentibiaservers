import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-fresh-start-server-argentina');
}

export default function CoxaotFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-fresh-start-server-argentina" />;
}
