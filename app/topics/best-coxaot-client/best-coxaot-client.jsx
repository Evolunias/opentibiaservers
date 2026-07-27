import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-coxaot-client');
}

export default function BestCoxaotClientKeywordPage() {
  return <StaticKeywordPage slug="best-coxaot-client" />;
}
