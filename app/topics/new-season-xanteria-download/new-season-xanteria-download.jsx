import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-xanteria-download');
}

export default function NewSeasonXanteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-xanteria-download" />;
}
