import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-15-evo-server');
}

export default function Empirebr15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-15-evo-server" />;
}
