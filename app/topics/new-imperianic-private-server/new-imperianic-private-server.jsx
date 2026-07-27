import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-imperianic-private-server');
}

export default function NewImperianicPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-imperianic-private-server" />;
}
