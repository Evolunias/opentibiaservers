import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-13-evo-server');
}

export default function Empirebr13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-13-evo-server" />;
}
