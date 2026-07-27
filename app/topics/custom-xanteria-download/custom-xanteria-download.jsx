import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-xanteria-download');
}

export default function CustomXanteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-xanteria-download" />;
}
