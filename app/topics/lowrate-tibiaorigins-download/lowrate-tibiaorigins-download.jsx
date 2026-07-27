import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaorigins-download');
}

export default function LowrateTibiaoriginsDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaorigins-download" />;
}
