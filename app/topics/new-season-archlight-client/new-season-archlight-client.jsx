import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-archlight-client');
}

export default function NewSeasonArchlightClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-archlight-client" />;
}
