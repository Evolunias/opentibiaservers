import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oxygenot-client');
}

export default function NewSeasonOxygenotClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-oxygenot-client" />;
}
