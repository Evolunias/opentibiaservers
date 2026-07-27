import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-mist-of-death-download');
}

export default function PopularMistOfDeathDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-mist-of-death-download" />;
}
