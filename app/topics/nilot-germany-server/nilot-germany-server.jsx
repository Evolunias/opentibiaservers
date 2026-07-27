import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-germany-server');
}

export default function NilotGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-germany-server" />;
}
