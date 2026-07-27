import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-10-0-high-exp-server');
}

export default function AureraGlobal100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-10-0-high-exp-server" />;
}
