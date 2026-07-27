import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibijka-client');
}

export default function NewSeasonTibijkaClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibijka-client" />;
}
