import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-15-low-exp-server');
}

export default function AureraGlobal15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-15-low-exp-server" />;
}
