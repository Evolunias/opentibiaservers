import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realesta');
}

export default function NewSeasonRealestaKeywordPage() {
  return <StaticKeywordPage slug="new-season-realesta" />;
}
