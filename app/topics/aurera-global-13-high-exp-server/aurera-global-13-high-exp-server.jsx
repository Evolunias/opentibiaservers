import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-13-high-exp-server');
}

export default function AureraGlobal13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-13-high-exp-server" />;
}
