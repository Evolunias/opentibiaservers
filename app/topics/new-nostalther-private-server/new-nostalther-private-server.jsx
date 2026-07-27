import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nostalther-private-server');
}

export default function NewNostaltherPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-nostalther-private-server" />;
}
