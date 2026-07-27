import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-luminera-download');
}

export default function ActiveLumineraDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-luminera-download" />;
}
