import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-high-exp-server-sweden');
}

export default function UnlineHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="unline-high-exp-server-sweden" />;
}
