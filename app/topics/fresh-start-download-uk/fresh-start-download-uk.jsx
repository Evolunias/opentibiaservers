import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-download-uk');
}

export default function FreshStartDownloadUkKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-download-uk" />;
}
