import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-download');
}

export default function MiracleDownloadKeywordPage() {
  return <StaticKeywordPage slug="miracle-download" />;
}
