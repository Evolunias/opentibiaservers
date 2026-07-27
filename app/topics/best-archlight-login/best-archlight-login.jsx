import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-archlight-login');
}

export default function BestArchlightLoginKeywordPage() {
  return <StaticKeywordPage slug="best-archlight-login" />;
}
