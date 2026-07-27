import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-calmera-ot-login');
}

export default function NewSeasonCalmeraOtLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-calmera-ot-login" />;
}
