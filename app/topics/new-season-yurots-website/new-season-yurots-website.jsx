import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-yurots-website');
}

export default function NewSeasonYurotsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-yurots-website" />;
}
