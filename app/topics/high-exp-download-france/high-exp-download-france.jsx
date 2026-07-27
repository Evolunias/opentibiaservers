import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-download-france');
}

export default function HighExpDownloadFranceKeywordPage() {
  return <StaticKeywordPage slug="high-exp-download-france" />;
}
