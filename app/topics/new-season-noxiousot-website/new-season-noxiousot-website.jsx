import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-noxiousot-website');
}

export default function NewSeasonNoxiousotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-noxiousot-website" />;
}
