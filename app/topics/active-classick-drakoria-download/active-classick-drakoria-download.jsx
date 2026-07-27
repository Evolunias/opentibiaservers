import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classick-drakoria-download');
}

export default function ActiveClassickDrakoriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-classick-drakoria-download" />;
}
