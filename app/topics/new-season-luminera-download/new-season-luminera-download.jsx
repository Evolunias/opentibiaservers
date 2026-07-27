import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-luminera-download');
}

export default function NewSeasonLumineraDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-luminera-download" />;
}
