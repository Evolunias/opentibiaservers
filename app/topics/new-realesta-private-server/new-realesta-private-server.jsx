import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realesta-private-server');
}

export default function NewRealestaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-realesta-private-server" />;
}
