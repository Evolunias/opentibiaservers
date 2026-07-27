import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-fresh-start-server-france');
}

export default function CoxaotFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="coxaot-fresh-start-server-france" />;
}
