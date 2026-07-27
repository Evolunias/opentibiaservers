import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-archlight-login');
}

export default function CurrentArchlightLoginKeywordPage() {
  return <StaticKeywordPage slug="current-archlight-login" />;
}
