import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-download');
}

export default function LumineraDownloadKeywordPage() {
  return <StaticKeywordPage slug="luminera-download" />;
}
