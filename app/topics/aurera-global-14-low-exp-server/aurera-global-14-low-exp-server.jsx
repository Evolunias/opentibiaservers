import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-14-low-exp-server');
}

export default function AureraGlobal14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-14-low-exp-server" />;
}
