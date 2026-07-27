import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiascape-download');
}

export default function OfficialTibiascapeDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-tibiascape-download" />;
}
