import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaorigins-download');
}

export default function BestTibiaoriginsDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaorigins-download" />;
}
