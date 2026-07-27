import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiantis-download');
}

export default function OfficialTibiantisDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-tibiantis-download" />;
}
