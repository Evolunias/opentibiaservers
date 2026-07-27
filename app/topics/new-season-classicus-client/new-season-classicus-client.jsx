import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classicus-client');
}

export default function NewSeasonClassicusClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-classicus-client" />;
}
