import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nostalther-private-server');
}

export default function NewSeasonNostaltherPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-nostalther-private-server" />;
}
