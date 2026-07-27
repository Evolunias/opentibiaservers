import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realesta-website');
}

export default function NewSeasonRealestaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-realesta-website" />;
}
