import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-archlight-ot-server');
}

export default function NewSeasonArchlightOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-archlight-ot-server" />;
}
