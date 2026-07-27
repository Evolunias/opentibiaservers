import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-chile-servers');
}

export default function NilotChileServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-chile-servers" />;
}
