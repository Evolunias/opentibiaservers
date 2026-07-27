import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-download-latin-america');
}

export default function LowExpDownloadLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-download-latin-america" />;
}
