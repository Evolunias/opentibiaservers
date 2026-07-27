import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-argentina-servers');
}

export default function NilotArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-argentina-servers" />;
}
