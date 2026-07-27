import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-high-exp-server-germany');
}

export default function AureraGlobalHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-high-exp-server-germany" />;
}
