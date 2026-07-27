import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-download-poland');
}

export default function FreshStartDownloadPolandKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-download-poland" />;
}
