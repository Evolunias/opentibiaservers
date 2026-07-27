import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-download-usa');
}

export default function RetroDownloadUsaKeywordPage() {
  return <StaticKeywordPage slug="retro-download-usa" />;
}
