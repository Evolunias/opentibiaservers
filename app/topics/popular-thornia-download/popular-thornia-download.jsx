import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thornia-download');
}

export default function PopularThorniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-thornia-download" />;
}
