import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-7-4-evo-server');
}

export default function AureraGlobal74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-7-4-evo-server" />;
}
