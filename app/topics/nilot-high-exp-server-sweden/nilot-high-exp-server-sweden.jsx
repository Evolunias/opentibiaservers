import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-high-exp-server-sweden');
}

export default function NilotHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nilot-high-exp-server-sweden" />;
}
