import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-similar-servers');
}

export default function CoxaotSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-similar-servers" />;
}
