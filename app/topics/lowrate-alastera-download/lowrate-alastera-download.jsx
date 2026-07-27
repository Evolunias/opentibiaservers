import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-alastera-download');
}

export default function LowrateAlasteraDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-alastera-download" />;
}
