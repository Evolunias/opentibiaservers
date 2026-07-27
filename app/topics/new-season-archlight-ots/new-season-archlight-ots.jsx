import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-archlight-ots');
}

export default function NewSeasonArchlightOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-archlight-ots" />;
}
