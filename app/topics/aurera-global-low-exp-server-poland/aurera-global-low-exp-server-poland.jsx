import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-low-exp-server-poland');
}

export default function AureraGlobalLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-low-exp-server-poland" />;
}
