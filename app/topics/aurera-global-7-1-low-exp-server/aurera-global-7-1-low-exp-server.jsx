import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-7-1-low-exp-server');
}

export default function AureraGlobal71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-7-1-low-exp-server" />;
}
