import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-luminera-download');
}

export default function BestLumineraDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-luminera-download" />;
}
