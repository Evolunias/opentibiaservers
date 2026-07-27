import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-download');
}

export default function CarlinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="carlinot-download" />;
}
