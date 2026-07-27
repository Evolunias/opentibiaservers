import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-download-france');
}

export default function LowExpDownloadFranceKeywordPage() {
  return <StaticKeywordPage slug="low-exp-download-france" />;
}
