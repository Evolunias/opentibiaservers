import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oxygenot-website');
}

export default function NewSeasonOxygenotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-oxygenot-website" />;
}
