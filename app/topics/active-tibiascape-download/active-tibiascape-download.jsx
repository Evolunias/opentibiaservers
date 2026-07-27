import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiascape-download');
}

export default function ActiveTibiascapeDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-tibiascape-download" />;
}
