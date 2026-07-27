import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-download-latin-america');
}

export default function RetroDownloadLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-download-latin-america" />;
}
