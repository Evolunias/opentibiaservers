import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thornia-download');
}

export default function TopThorniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-thornia-download" />;
}
