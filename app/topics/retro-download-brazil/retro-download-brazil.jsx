import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-download-brazil');
}

export default function RetroDownloadBrazilKeywordPage() {
  return <StaticKeywordPage slug="retro-download-brazil" />;
}
