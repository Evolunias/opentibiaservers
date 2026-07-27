import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-europe-servers');
}

export default function CoxaotEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-europe-servers" />;
}
