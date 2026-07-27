import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nilot-official');
}

export default function NewSeasonNilotOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-nilot-official" />;
}
