import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaorigins-download');
}

export default function TopTibiaoriginsDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaorigins-download" />;
}
