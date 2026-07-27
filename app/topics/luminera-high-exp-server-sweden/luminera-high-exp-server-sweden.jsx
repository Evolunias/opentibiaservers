import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-high-exp-server-sweden');
}

export default function LumineraHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="luminera-high-exp-server-sweden" />;
}
