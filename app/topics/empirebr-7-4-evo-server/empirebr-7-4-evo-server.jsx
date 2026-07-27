import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-4-evo-server');
}

export default function Empirebr74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-4-evo-server" />;
}
