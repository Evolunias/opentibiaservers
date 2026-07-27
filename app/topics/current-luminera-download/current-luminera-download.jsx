import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-luminera-download');
}

export default function CurrentLumineraDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-luminera-download" />;
}
