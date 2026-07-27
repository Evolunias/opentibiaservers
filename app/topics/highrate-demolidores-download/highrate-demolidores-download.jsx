import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-demolidores-download');
}

export default function HighrateDemolidoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-demolidores-download" />;
}
