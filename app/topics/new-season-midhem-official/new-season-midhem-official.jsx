import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-midhem-official');
}

export default function NewSeasonMidhemOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-midhem-official" />;
}
