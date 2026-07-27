import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-download-germany');
}

export default function RetroDownloadGermanyKeywordPage() {
  return <StaticKeywordPage slug="retro-download-germany" />;
}
