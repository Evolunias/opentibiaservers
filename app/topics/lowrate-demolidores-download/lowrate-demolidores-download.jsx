import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-demolidores-download');
}

export default function LowrateDemolidoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-demolidores-download" />;
}
