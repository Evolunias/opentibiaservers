import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nostalther-download');
}

export default function PopularNostaltherDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-nostalther-download" />;
}
