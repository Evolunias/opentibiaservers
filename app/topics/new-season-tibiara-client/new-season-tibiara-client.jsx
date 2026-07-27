import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiara-client');
}

export default function NewSeasonTibiaraClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiara-client" />;
}
