import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('the-forgotten-server-download');
}

export default function TheForgottenServerDownloadKeywordPage() {
  return <StaticKeywordPage slug="the-forgotten-server-download" />;
}
