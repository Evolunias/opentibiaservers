import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-download-latin-america');
}

export default function FreshStartDownloadLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-download-latin-america" />;
}
