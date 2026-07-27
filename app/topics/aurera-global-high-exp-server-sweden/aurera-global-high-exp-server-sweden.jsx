import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-high-exp-server-sweden');
}

export default function AureraGlobalHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-high-exp-server-sweden" />;
}
