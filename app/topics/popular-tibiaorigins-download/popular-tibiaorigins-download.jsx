import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaorigins-download');
}

export default function PopularTibiaoriginsDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaorigins-download" />;
}
