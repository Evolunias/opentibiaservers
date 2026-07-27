import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('forgotten-server-download');
}

export default function ForgottenServerDownloadKeywordPage() {
  return <StaticKeywordPage slug="forgotten-server-download" />;
}
