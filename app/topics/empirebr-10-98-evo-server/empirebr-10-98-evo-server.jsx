import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-10-98-evo-server');
}

export default function Empirebr1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-10-98-evo-server" />;
}
