import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-sweden-server');
}

export default function NilotSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-sweden-server" />;
}
