import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-high-exp-server-argentina');
}

export default function AureraGlobalHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-high-exp-server-argentina" />;
}
