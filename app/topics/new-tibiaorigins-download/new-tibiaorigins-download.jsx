import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaorigins-download');
}

export default function NewTibiaoriginsDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaorigins-download" />;
}
