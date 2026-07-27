import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-archlight-login');
}

export default function NewArchlightLoginKeywordPage() {
  return <StaticKeywordPage slug="new-archlight-login" />;
}
