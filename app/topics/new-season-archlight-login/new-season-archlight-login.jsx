import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-archlight-login');
}

export default function NewSeasonArchlightLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-archlight-login" />;
}
