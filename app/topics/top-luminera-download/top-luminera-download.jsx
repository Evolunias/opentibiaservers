import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-luminera-download');
}

export default function TopLumineraDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-luminera-download" />;
}
