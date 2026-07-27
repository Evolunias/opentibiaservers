import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaorigins-download');
}

export default function NoResetTibiaoriginsDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaorigins-download" />;
}
