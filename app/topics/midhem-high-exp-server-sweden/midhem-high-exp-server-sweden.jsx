import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-high-exp-server-sweden');
}

export default function MidhemHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="midhem-high-exp-server-sweden" />;
}
