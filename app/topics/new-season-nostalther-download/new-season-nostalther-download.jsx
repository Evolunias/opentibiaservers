import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nostalther-download');
}

export default function NewSeasonNostaltherDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-nostalther-download" />;
}
