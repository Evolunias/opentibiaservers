import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-download');
}

export default function TibiascapeDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-download" />;
}
