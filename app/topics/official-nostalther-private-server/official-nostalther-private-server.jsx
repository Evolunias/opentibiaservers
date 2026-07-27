import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nostalther-private-server');
}

export default function OfficialNostaltherPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-nostalther-private-server" />;
}
