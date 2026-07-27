import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-download-argentina');
}

export default function LowExpDownloadArgentinaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-download-argentina" />;
}
