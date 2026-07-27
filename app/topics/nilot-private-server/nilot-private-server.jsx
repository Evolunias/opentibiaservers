import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-private-server');
}

export default function NilotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-private-server" />;
}
