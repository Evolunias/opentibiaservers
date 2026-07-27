import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-high-exp-server-poland');
}

export default function AureraGlobalHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-high-exp-server-poland" />;
}
