import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-canob-client');
}

export default function NewSeasonCanobClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-canob-client" />;
}
