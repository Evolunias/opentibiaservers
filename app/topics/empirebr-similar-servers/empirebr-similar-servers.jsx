import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-similar-servers');
}

export default function EmpirebrSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-similar-servers" />;
}
