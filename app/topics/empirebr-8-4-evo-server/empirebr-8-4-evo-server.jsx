import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-4-evo-server');
}

export default function Empirebr84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-4-evo-server" />;
}
