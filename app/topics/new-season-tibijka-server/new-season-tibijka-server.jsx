import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibijka-server');
}

export default function NewSeasonTibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibijka-server" />;
}
