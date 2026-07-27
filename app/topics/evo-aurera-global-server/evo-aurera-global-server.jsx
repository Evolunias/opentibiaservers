import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-aurera-global-server');
}

export default function EvoAureraGlobalServerKeywordPage() {
  return <StaticKeywordPage slug="evo-aurera-global-server" />;
}
