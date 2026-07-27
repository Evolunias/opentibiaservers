import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-low-exp-server-sweden');
}

export default function UnlineLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="unline-low-exp-server-sweden" />;
}
