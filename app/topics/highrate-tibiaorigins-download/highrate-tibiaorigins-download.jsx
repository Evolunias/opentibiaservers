import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaorigins-download');
}

export default function HighrateTibiaoriginsDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaorigins-download" />;
}
