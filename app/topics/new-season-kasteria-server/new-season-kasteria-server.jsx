import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-kasteria-server');
}

export default function NewSeasonKasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-kasteria-server" />;
}
