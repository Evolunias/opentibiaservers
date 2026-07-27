import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-download');
}

export default function TibiantisDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-download" />;
}
