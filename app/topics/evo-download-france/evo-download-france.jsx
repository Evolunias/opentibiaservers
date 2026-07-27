import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-download-france');
}

export default function EvoDownloadFranceKeywordPage() {
  return <StaticKeywordPage slug="evo-download-france" />;
}
