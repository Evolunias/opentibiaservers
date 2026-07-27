import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaorigins-download');
}

export default function CustomTibiaoriginsDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaorigins-download" />;
}
