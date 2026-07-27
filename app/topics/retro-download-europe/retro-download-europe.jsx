import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-download-europe');
}

export default function RetroDownloadEuropeKeywordPage() {
  return <StaticKeywordPage slug="retro-download-europe" />;
}
