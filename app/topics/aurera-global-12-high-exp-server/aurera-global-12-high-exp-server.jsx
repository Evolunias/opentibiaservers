import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-12-high-exp-server');
}

export default function AureraGlobal12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-12-high-exp-server" />;
}
