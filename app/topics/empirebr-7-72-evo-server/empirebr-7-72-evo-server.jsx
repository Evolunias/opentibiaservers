import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-72-evo-server');
}

export default function Empirebr772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-72-evo-server" />;
}
