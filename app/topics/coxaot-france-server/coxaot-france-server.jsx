import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-france-server');
}

export default function CoxaotFranceServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-france-server" />;
}
