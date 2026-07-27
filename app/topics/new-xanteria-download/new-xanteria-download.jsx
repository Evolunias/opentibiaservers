import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-xanteria-download');
}

export default function NewXanteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-xanteria-download" />;
}
