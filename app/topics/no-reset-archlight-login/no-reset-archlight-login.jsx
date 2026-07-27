import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-archlight-login');
}

export default function NoResetArchlightLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-archlight-login" />;
}
