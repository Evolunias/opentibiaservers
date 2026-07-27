import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-0-evo-server');
}

export default function Empirebr80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-0-evo-server" />;
}
