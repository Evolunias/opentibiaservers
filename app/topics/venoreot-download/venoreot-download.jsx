import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-download');
}

export default function VenoreotDownloadKeywordPage() {
  return <StaticKeywordPage slug="venoreot-download" />;
}
