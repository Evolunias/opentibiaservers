import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-private-server');
}

export default function ImperianicPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-private-server" />;
}
