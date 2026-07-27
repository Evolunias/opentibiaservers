import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-6-high-exp-server');
}

export default function AureraGlobal86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-6-high-exp-server" />;
}
