import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-high-exp-server-sweden');
}

export default function RealestaHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realesta-high-exp-server-sweden" />;
}
