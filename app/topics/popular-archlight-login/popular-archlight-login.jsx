import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-archlight-login');
}

export default function PopularArchlightLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-archlight-login" />;
}
