import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-luminera-download');
}

export default function PopularLumineraDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-luminera-download" />;
}
