import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-download-south-america');
}

export default function RetroDownloadSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-download-south-america" />;
}
