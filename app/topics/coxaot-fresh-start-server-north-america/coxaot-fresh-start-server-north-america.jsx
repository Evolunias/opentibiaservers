import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-fresh-start-server-north-america');
}

export default function CoxaotFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-fresh-start-server-north-america" />;
}
