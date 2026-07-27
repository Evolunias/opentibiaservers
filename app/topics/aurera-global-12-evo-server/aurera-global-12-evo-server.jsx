import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-12-evo-server');
}

export default function AureraGlobal12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-12-evo-server" />;
}
