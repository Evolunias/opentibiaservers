import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-midhem-download');
}

export default function HighrateMidhemDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-midhem-download" />;
}
