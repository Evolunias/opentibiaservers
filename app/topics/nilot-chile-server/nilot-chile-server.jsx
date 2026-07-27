import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-chile-server');
}

export default function NilotChileServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-chile-server" />;
}
