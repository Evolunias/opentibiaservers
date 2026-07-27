import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-calmera-ot-website');
}

export default function NewSeasonCalmeraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-calmera-ot-website" />;
}
