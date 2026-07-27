import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-7-6-evo-server');
}

export default function AureraGlobal76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-7-6-evo-server" />;
}
