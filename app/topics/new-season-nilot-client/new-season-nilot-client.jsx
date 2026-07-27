import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nilot-client');
}

export default function NewSeasonNilotClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-nilot-client" />;
}
