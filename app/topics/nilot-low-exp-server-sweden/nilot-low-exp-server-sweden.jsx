import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-low-exp-server-sweden');
}

export default function NilotLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nilot-low-exp-server-sweden" />;
}
