import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-archlight-official');
}

export default function PopularArchlightOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-archlight-official" />;
}
