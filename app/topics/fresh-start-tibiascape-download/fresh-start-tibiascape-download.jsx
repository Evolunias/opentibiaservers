import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiascape-download');
}

export default function FreshStartTibiascapeDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiascape-download" />;
}
