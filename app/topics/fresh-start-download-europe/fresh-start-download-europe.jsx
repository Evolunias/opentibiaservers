import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-download-europe');
}

export default function FreshStartDownloadEuropeKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-download-europe" />;
}
