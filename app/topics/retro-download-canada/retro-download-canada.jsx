import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-download-canada');
}

export default function RetroDownloadCanadaKeywordPage() {
  return <StaticKeywordPage slug="retro-download-canada" />;
}
