import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-1-low-exp-server');
}

export default function AureraGlobal81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-1-low-exp-server" />;
}
