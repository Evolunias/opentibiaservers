import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-high-exp-server-brazil');
}

export default function AureraGlobalHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-high-exp-server-brazil" />;
}
