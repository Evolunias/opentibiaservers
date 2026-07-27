import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-6-evo-server');
}

export default function Empirebr86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-6-evo-server" />;
}
