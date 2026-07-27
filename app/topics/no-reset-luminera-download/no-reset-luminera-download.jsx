import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-luminera-download');
}

export default function NoResetLumineraDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-luminera-download" />;
}
