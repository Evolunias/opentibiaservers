import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-high-exp-server-sweden');
}

export default function RealeraHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realera-high-exp-server-sweden" />;
}
