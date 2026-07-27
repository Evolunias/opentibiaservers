import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-10-0-evo-server');
}

export default function AureraGlobal100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-10-0-evo-server" />;
}
