import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-miracle-download');
}

export default function OfficialMiracleDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-miracle-download" />;
}
