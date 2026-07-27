import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-midhem-download');
}

export default function PopularMidhemDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-midhem-download" />;
}
