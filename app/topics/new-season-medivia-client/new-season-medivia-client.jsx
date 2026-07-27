import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-medivia-client');
}

export default function NewSeasonMediviaClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-medivia-client" />;
}
