import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-archlight-login');
}

export default function CustomArchlightLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-archlight-login" />;
}
