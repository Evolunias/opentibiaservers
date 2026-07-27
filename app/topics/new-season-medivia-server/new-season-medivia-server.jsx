import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-medivia-server');
}

export default function NewSeasonMediviaServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-medivia-server" />;
}
