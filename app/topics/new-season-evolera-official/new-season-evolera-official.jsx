import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolera-official');
}

export default function NewSeasonEvoleraOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolera-official" />;
}
