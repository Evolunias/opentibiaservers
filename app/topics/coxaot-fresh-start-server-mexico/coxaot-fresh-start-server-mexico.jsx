import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-fresh-start-server-mexico');
}

export default function CoxaotFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="coxaot-fresh-start-server-mexico" />;
}
