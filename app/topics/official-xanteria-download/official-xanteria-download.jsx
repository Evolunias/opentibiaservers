import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-xanteria-download');
}

export default function OfficialXanteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-xanteria-download" />;
}
