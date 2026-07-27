import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-archlight-register');
}

export default function NewSeasonArchlightRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-archlight-register" />;
}
