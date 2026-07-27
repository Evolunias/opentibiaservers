import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-medivia-ot-server');
}

export default function NewSeasonMediviaOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-medivia-ot-server" />;
}
