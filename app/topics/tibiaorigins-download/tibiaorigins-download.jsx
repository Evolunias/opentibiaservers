import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-download');
}

export default function TibiaoriginsDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-download" />;
}
