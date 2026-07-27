import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-europe-server');
}

export default function CoxaotEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-europe-server" />;
}
