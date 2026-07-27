import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaorigins-download');
}

export default function CurrentTibiaoriginsDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaorigins-download" />;
}
