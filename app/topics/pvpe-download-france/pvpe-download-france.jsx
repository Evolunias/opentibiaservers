import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-download-france');
}

export default function PvpeDownloadFranceKeywordPage() {
  return <StaticKeywordPage slug="pvpe-download-france" />;
}
