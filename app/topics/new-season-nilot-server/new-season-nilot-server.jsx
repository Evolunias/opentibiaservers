import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nilot-server');
}

export default function NewSeasonNilotServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-nilot-server" />;
}
