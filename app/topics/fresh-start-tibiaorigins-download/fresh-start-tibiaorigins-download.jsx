import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaorigins-download');
}

export default function FreshStartTibiaoriginsDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaorigins-download" />;
}
