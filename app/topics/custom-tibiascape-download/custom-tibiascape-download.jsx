import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiascape-download');
}

export default function CustomTibiascapeDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiascape-download" />;
}
