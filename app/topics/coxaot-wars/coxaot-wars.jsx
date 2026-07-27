import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-wars');
}

export default function CoxaotWarsKeywordPage() {
  return <StaticKeywordPage slug="coxaot-wars" />;
}
