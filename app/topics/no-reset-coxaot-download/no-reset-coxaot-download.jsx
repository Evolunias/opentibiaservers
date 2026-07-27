import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-coxaot-download');
}

export default function NoResetCoxaotDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-coxaot-download" />;
}
