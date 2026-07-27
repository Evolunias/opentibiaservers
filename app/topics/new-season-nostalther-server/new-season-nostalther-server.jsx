import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nostalther-server');
}

export default function NewSeasonNostaltherServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-nostalther-server" />;
}
