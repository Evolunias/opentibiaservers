import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-alastera-download');
}

export default function HighrateAlasteraDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-alastera-download" />;
}
