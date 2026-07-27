import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-mist-of-death-download');
}

export default function FreshStartMistOfDeathDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-mist-of-death-download" />;
}
