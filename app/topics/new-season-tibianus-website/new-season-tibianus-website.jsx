import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibianus-website');
}

export default function NewSeasonTibianusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibianus-website" />;
}
