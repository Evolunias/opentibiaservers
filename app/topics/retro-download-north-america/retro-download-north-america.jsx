import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-download-north-america');
}

export default function RetroDownloadNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-download-north-america" />;
}
