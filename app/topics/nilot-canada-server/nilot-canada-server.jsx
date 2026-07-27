import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-canada-server');
}

export default function NilotCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-canada-server" />;
}
