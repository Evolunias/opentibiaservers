import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-luminera-download');
}

export default function HighrateLumineraDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-luminera-download" />;
}
