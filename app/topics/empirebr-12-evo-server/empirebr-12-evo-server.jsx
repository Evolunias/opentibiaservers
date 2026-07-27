import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-12-evo-server');
}

export default function Empirebr12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-12-evo-server" />;
}
