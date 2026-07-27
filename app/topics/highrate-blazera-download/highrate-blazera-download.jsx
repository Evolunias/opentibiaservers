import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-blazera-download');
}

export default function HighrateBlazeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-blazera-download" />;
}
