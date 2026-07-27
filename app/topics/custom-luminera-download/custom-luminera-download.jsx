import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-luminera-download');
}

export default function CustomLumineraDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-luminera-download" />;
}
