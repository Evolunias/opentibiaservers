import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-yurots-official');
}

export default function NewSeasonYurotsOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-yurots-official" />;
}
