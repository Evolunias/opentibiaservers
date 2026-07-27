import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-archlight-official');
}

export default function TopArchlightOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-archlight-official" />;
}
