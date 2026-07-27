import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-archlight-login');
}

export default function TopArchlightLoginKeywordPage() {
  return <StaticKeywordPage slug="top-archlight-login" />;
}
