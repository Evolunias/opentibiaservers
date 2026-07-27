import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-archlight-server');
}

export default function NewSeasonArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-archlight-server" />;
}
