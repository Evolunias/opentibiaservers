import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-miracle-download');
}

export default function HighrateMiracleDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-miracle-download" />;
}
