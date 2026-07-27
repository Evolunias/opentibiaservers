import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thornia-download');
}

export default function FreshStartThorniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thornia-download" />;
}
