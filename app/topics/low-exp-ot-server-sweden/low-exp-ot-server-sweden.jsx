import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-ot-server-sweden');
}

export default function LowExpOtServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="low-exp-ot-server-sweden" />;
}
