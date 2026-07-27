import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-high-exp-server-usa');
}

export default function AureraGlobalHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-high-exp-server-usa" />;
}
