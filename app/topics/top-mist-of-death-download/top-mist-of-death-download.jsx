import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-mist-of-death-download');
}

export default function TopMistOfDeathDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-mist-of-death-download" />;
}
