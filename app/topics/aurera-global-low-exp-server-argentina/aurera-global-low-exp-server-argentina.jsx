import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-low-exp-server-argentina');
}

export default function AureraGlobalLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-low-exp-server-argentina" />;
}
