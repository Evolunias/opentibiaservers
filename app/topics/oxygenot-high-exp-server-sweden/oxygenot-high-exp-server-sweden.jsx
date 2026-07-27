import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-high-exp-server-sweden');
}

export default function OxygenotHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-high-exp-server-sweden" />;
}
