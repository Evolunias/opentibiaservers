import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-argentina-server');
}

export default function NilotArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-argentina-server" />;
}
