import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thaisot-client');
}

export default function NewSeasonThaisotClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-thaisot-client" />;
}
