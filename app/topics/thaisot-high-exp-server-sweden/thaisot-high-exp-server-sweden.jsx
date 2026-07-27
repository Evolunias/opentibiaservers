import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-high-exp-server-sweden');
}

export default function ThaisotHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thaisot-high-exp-server-sweden" />;
}
