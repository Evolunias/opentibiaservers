import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-harmonia-ot-website');
}

export default function NewSeasonHarmoniaOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-harmonia-ot-website" />;
}
