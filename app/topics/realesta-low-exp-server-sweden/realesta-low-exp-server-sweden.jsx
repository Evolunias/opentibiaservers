import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-low-exp-server-sweden');
}

export default function RealestaLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realesta-low-exp-server-sweden" />;
}
