import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-canob-server');
}

export default function NewSeasonCanobServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-canob-server" />;
}
