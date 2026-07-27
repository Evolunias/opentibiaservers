import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-server');
}

export default function NilotServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-server" />;
}
