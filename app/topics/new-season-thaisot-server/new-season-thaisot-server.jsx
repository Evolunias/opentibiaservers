import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thaisot-server');
}

export default function NewSeasonThaisotServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-thaisot-server" />;
}
