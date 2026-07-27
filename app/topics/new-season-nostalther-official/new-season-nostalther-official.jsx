import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nostalther-official');
}

export default function NewSeasonNostaltherOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-nostalther-official" />;
}
