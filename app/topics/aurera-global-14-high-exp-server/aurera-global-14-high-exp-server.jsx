import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-14-high-exp-server');
}

export default function AureraGlobal14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-14-high-exp-server" />;
}
