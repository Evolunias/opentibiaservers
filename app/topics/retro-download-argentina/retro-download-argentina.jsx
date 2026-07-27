import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-download-argentina');
}

export default function RetroDownloadArgentinaKeywordPage() {
  return <StaticKeywordPage slug="retro-download-argentina" />;
}
