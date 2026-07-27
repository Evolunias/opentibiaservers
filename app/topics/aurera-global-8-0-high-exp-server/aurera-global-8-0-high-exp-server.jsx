import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-0-high-exp-server');
}

export default function AureraGlobal80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-0-high-exp-server" />;
}
