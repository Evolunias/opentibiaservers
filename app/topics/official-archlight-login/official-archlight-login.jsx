import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-archlight-login');
}

export default function OfficialArchlightLoginKeywordPage() {
  return <StaticKeywordPage slug="official-archlight-login" />;
}
