import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-low-exp-server-sweden');
}

export default function ThaisotLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thaisot-low-exp-server-sweden" />;
}
