import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-11-low-exp-server');
}

export default function AureraGlobal11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-11-low-exp-server" />;
}
