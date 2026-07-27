import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-fresh-start-server-latin-america');
}

export default function CoxaotFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-fresh-start-server-latin-america" />;
}
