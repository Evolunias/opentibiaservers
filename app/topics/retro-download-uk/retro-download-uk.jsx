import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-download-uk');
}

export default function RetroDownloadUkKeywordPage() {
  return <StaticKeywordPage slug="retro-download-uk" />;
}
