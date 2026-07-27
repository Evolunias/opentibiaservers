import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaorigins-download');
}

export default function ActiveTibiaoriginsDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaorigins-download" />;
}
