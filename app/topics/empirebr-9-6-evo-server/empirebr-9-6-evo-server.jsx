import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-9-6-evo-server');
}

export default function Empirebr96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-9-6-evo-server" />;
}
