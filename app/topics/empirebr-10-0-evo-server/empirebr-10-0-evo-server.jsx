import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-10-0-evo-server');
}

export default function Empirebr100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-10-0-evo-server" />;
}
