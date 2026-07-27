import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-kasteria-client');
}

export default function NewSeasonKasteriaClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-kasteria-client" />;
}
