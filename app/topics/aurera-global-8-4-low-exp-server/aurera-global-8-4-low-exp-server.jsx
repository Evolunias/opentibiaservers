import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-4-low-exp-server');
}

export default function AureraGlobal84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-4-low-exp-server" />;
}
