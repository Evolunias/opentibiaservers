import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classicus-website');
}

export default function NewSeasonClassicusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-classicus-website" />;
}
