import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-download-mexico');
}

export default function RetroDownloadMexicoKeywordPage() {
  return <StaticKeywordPage slug="retro-download-mexico" />;
}
