import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-1-evo-server');
}

export default function Empirebr81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-1-evo-server" />;
}
