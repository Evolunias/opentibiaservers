import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-archlight-login');
}

export default function ActiveArchlightLoginKeywordPage() {
  return <StaticKeywordPage slug="active-archlight-login" />;
}
