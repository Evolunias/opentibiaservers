import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realera-website');
}

export default function NewSeasonRealeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-realera-website" />;
}
