import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-1-evo-server');
}

export default function Empirebr71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-1-evo-server" />;
}
