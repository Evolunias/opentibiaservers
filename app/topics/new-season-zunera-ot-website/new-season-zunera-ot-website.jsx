import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-zunera-ot-website');
}

export default function NewSeasonZuneraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-zunera-ot-website" />;
}
