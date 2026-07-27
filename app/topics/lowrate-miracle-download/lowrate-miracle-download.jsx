import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-miracle-download');
}

export default function LowrateMiracleDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-miracle-download" />;
}
