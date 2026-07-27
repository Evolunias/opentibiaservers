import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eldera-download');
}

export default function NoResetElderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eldera-download" />;
}
