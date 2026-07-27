import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classick-drakoria-download');
}

export default function NewClassickDrakoriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-classick-drakoria-download" />;
}
