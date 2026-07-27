import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-15-high-exp-server');
}

export default function AureraGlobal15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-15-high-exp-server" />;
}
