import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-kasteria');
}

export default function NewSeasonKasteriaKeywordPage() {
  return <StaticKeywordPage slug="new-season-kasteria" />;
}
