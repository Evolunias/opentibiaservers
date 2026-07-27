import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-miracle-official');
}

export default function NewSeasonMiracleOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-miracle-official" />;
}
