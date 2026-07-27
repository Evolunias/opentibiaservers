import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-archlight-official');
}

export default function ActiveArchlightOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-archlight-official" />;
}
