import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-download-france');
}

export default function BaiakDownloadFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-download-france" />;
}
