import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-medivia');
}

export default function NewSeasonMediviaKeywordPage() {
  return <StaticKeywordPage slug="new-season-medivia" />;
}
