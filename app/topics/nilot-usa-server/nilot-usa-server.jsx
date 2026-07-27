import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-usa-server');
}

export default function NilotUsaServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-usa-server" />;
}
