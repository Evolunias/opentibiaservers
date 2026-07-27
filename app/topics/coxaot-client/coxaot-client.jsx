import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-client');
}

export default function CoxaotClientKeywordPage() {
  return <StaticKeywordPage slug="coxaot-client" />;
}
