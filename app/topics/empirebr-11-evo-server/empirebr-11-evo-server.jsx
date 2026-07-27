import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-11-evo-server');
}

export default function Empirebr11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-11-evo-server" />;
}
