import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-mist-of-death-download');
}

export default function NoResetMistOfDeathDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-mist-of-death-download" />;
}
