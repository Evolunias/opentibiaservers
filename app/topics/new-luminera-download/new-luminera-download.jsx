import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-luminera-download');
}

export default function NewLumineraDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-luminera-download" />;
}
