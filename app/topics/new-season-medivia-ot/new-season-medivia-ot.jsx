import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-medivia-ot');
}

export default function NewSeasonMediviaOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-medivia-ot" />;
}
