import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-low-exp-server-sweden');
}

export default function OxygenotLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-low-exp-server-sweden" />;
}
