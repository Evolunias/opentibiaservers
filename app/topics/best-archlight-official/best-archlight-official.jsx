import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-archlight-official');
}

export default function BestArchlightOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-archlight-official" />;
}
