import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaorigins-download');
}

export default function OfficialTibiaoriginsDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaorigins-download" />;
}
