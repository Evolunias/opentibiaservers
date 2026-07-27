import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-7-6-low-exp-server');
}

export default function AureraGlobal76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-7-6-low-exp-server" />;
}
