import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-download-france');
}

export default function FreshStartDownloadFranceKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-download-france" />;
}
