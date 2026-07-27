import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiame-download');
}

export default function OfficialTibiameDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-tibiame-download" />;
}
