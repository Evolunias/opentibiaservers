import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-luminera-download');
}

export default function FreshStartLumineraDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-luminera-download" />;
}
