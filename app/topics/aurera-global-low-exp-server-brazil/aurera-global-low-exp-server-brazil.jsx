import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-low-exp-server-brazil');
}

export default function AureraGlobalLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-low-exp-server-brazil" />;
}
