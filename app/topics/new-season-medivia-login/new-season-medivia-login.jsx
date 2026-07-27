import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-medivia-login');
}

export default function NewSeasonMediviaLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-medivia-login" />;
}
