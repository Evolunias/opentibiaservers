import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-france-servers');
}

export default function CoxaotFranceServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-france-servers" />;
}
