import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-archlight-official');
}

export default function CustomArchlightOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-archlight-official" />;
}
