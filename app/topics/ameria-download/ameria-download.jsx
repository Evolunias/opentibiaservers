import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-download');
}

export default function AmeriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="ameria-download" />;
}
