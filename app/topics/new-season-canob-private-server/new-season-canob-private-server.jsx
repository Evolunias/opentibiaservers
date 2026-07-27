import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-canob-private-server');
}

export default function NewSeasonCanobPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-canob-private-server" />;
}
