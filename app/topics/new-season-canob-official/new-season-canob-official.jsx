import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-canob-official');
}

export default function NewSeasonCanobOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-canob-official" />;
}
