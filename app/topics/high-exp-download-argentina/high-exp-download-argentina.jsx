import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-download-argentina');
}

export default function HighExpDownloadArgentinaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-download-argentina" />;
}
