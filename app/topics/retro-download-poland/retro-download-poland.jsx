import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-download-poland');
}

export default function RetroDownloadPolandKeywordPage() {
  return <StaticKeywordPage slug="retro-download-poland" />;
}
