import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classick-drakoria-download');
}

export default function CustomClassickDrakoriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-classick-drakoria-download" />;
}
