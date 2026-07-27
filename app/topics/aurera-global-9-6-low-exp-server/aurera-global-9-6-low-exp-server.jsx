import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-9-6-low-exp-server');
}

export default function AureraGlobal96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-9-6-low-exp-server" />;
}
