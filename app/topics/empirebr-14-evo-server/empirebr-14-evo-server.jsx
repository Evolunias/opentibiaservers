import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-14-evo-server');
}

export default function Empirebr14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-14-evo-server" />;
}
