import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiame-website');
}

export default function NewSeasonTibiameWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiame-website" />;
}
