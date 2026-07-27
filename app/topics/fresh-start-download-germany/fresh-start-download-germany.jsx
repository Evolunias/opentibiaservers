import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-download-germany');
}

export default function FreshStartDownloadGermanyKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-download-germany" />;
}
