import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-mist-of-death-download');
}

export default function BestMistOfDeathDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-mist-of-death-download" />;
}
