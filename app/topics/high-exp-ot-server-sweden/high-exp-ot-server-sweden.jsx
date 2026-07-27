import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-ot-server-sweden');
}

export default function HighExpOtServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="high-exp-ot-server-sweden" />;
}
