import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-calmera-ot-server');
}

export default function NewSeasonCalmeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-calmera-ot-server" />;
}
