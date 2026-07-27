import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiascape-download');
}

export default function NewTibiascapeDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-tibiascape-download" />;
}
