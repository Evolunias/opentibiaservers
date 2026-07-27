import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-13-evo-server');
}

export default function AureraGlobal13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-13-evo-server" />;
}
