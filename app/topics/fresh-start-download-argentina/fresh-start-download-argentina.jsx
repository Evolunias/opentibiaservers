import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-download-argentina');
}

export default function FreshStartDownloadArgentinaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-download-argentina" />;
}
