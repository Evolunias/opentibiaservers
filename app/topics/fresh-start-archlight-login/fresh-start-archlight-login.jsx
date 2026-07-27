import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-archlight-login');
}

export default function FreshStartArchlightLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-archlight-login" />;
}
