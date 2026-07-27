import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-download-sweden');
}

export default function RetroDownloadSwedenKeywordPage() {
  return <StaticKeywordPage slug="retro-download-sweden" />;
}
